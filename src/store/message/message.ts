import { Module } from 'vuex';
import type { IRootState } from '@/store/type';
import { IMessage } from './type';
import { getMsgList, getMsg } from '@/service/message/message';

export const message: Module<IMessage, IRootState> = {
  namespaced: true,
  state() {
    return {
      messageItem: [],
      isEnd: false,
      isLoading: false,
      allMessage: [],
      nextMessage: [],
      allMessageCopy: [],
      photos: ''
    };
  },
  mutations: {
    changeClassifyItem(state, res) {
      state.messageItem = res.data;
      state.photos = res.photos;
    },
    changeAllMessage(state, allMessage) {
      allMessage.reverse();
      const objString = JSON.stringify(allMessage);
      state.allMessage = allMessage;
      state.allMessageCopy = JSON.parse(objString);
    },
    changeAllMessageCopy(state, value) {
      state.allMessageCopy.push(value);
    },
    changeIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    clearAllMessage(state) {
      state.allMessage = [];
      state.allMessageCopy = [];
    },
    changeNextMessage(state, allMessage) {
      state.nextMessage = [];
      //轮询数据对比长度 添加数据
      if (state.allMessage.length !== allMessage.length) {
        allMessage.reverse();
        state.nextMessage = allMessage.slice(state.allMessage.length);
        state.allMessage = state.allMessage.concat(state.nextMessage);
        state.allMessageCopy = state.allMessageCopy.concat(state.nextMessage);
      } else {
        for (let i = 0; i < allMessage.length; i++) {
          const newElement = allMessage[i];
          const oldElement = state.allMessage.reverse().find((oldElement) => oldElement.time === newElement.time);
          if (!oldElement) {
            state.nextMessage.push(newElement);
          }
        }
        state.allMessageCopy = state.allMessageCopy.concat(state.nextMessage.reverse());
      }
      state.allMessage = allMessage.reverse();
    },
    changeIsEnd(state, isEnd) {
      state.isEnd = isEnd;
    },
    concatAllMessage(state, allMessage: any[]) {
      state.allMessageCopy = allMessage.concat(state.allMessageCopy);
    }
  },
  actions: {
    //获取聊天数量
    async getMessageItem({ commit }, payLoad: string) {
      commit('changeIsLoading', true);
      const res = await getMsgList(payLoad);
      commit('changeClassifyItem', res);
      commit('changeIsLoading', false);
    },
    //获取每个聊天内容
    async getAllMessage({ commit }, payLoad: string) {
      commit('clearAllMessage');
      commit('changeIsLoading', true);
      const { data } = await getMsg(payLoad);
      if (data.length < 50) {
        commit('changeIsEnd', true);
      }
      commit('changeAllMessage', data);
      commit('changeIsLoading', false);
    },
    async getAllMessageList({ commit }, payLoad: string) {
      commit('changeIsLoading', true);
      const { data } = await getMsg(payLoad);
      if (data.length === 0) {
        commit('changeIsEnd', true);
      } else if (data.length > 0 && data.length < 50) {
        commit('changeIsEnd', true);
        commit('concatAllMessage', data);
      } else {
        commit('changeIsEnd', false);
        commit('concatAllMessage', data);
      }
      commit('changeIsLoading', false);
    },
    async getNextMessage({ commit }, payLoad: string) {
      commit('changeIsLoading', true);
      const { data } = await getMsg(payLoad);
      commit('changeNextMessage', data);
      commit('changeIsLoading', false);
    }
  }
};
