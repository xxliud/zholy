// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    juan_old: [
      {'ch': '创世记', 'en': 'Genesis', 'num': 50, 'name': '創'},
      {'ch': '出埃及记', 'en': 'Exodus', 'num': 40, 'name': '出'},
      {'ch': '利未记', 'en': 'Levitius', 'num': 27, 'name': '利'},
      {'ch': '民数记', 'en': 'Numbers', 'num': 36, 'name': '民'},
      {'ch': '申命记', 'en': 'Deuteronomy', 'num': 34, 'name': '申'},
      {'ch': '约书亚记', 'en': 'Joshua', 'num': 24, 'name': '書'},
      {'ch': '士师记', 'en': 'Judges', 'num': 21, 'name': '士'},
      {'ch': '路得记', 'en': 'Ruth', 'num': 4, 'name': '得'},
      {'ch': '撒母耳记上', 'en': 'Samuel 1', 'num': 31, 'name': '撒上'},
      {'ch': '撒母耳记下', 'en': 'Samuel 2', 'num': 24, 'name': '撒下'},
      {'ch': '列王纪上', 'en': 'Kings 1', 'num': 21, 'name': '王上'},
      {'ch': '列王纪下', 'en': 'Kings 2', 'num': 25, 'name': '王下'},
      {'ch': '历代志上', 'en': 'Chronicles 1', 'num': 29, 'name': '代上'},
      {'ch': '历代志下', 'en': 'Chronicles 2', 'num': 36, 'name': '代下'},
      {'ch': '以斯拉记', 'en': 'Ezra', 'num': 10, 'name': '拉'},
      {'ch': '尼希米记', 'en': 'Nehemiah', 'num': 13, 'name': '尼'},
      {'ch': '以斯帖记', 'en': 'Esther', 'num': 10, 'name': '斯'},
      {'ch': '约伯记', 'en': 'Job', 'num': 42, 'name': '伯'},
      {'ch': '诗篇', 'en': 'Psalms', 'num': 150, 'name': '詩'},
      {'ch': '箴言', 'en': 'Proverbs', 'num': 31, 'name': '箴'},
      {'ch': '传道书', 'en': 'Ecclesiastes', 'num': 12, 'name': '傳'},
      {'ch': '雅歌', 'en': 'Song_of_songs', 'num': 8, 'name': '歌'},
      {'ch': '以赛亚书', 'en': 'Isaiah', 'num': 66, 'name': '賽'},
      {'ch': '耶利米书', 'en': 'Jeremiah', 'num': 52, 'name': '耶'},
      {'ch': '耶利米哀歌', 'en': 'Lamentations', 'num': 5, 'name': '哀'},
      {'ch': '以西结书', 'en': 'Ezekiel', 'num': 48, 'name': '結'},
      {'ch': '但以理书', 'en': 'Daniel', 'num': 12, 'name': '但'},
      {'ch': '何西阿书', 'en': 'Hosea', 'num': 14, 'name': '何'},
      {'ch': '约珥书', 'en': 'Joel', 'num': 3, 'name': '珥'},
      {'ch': '阿摩司书', 'en': 'Amos', 'num': 9, 'name': '摩'},
      {'ch': '俄巴底亚书', 'en': 'Obadiah', 'num': 1, 'name': '俄'},
      {'ch': '约拿书', 'en': 'Jonah', 'num': 4, 'name': '拿'},
      {'ch': '弥迦书', 'en': 'Micah', 'num': 7, 'name': '彌'},
      {'ch': '那鸿书', 'en': 'Nahum', 'num': 3, 'name': '鴻'},
      {'ch': '哈巴谷书', 'en': 'Habakkuk', 'num': 3, 'name': '哈'},
      {'ch': '西番雅书', 'en': 'Zephaniah', 'num': 3, 'name': '番'},
      {'ch': '哈该书', 'en': 'Haggai', 'num': 2, 'name': '該'},
      {'ch': '撒迦利亚书', 'en': 'Zechariah', 'num': 14, 'name': '亞'},
      {'ch': '玛拉基书', 'en': 'Malachi', 'num': 4, 'name': '瑪'}
    ],
    juan_new: [
      {'ch': '马太福音', 'en': 'Matthew', 'num': 28, 'name': '太'},
      {'ch': '马可福音', 'en': 'Mark', 'num': 16, 'name': '可'},
      {'ch': '路加福音', 'en': 'Luke', 'num': 24, 'name': '路'},
      {'ch': '约翰福音', 'en': 'John', 'num': 21, 'name': '約'},
      {'ch': '使徒行传', 'en': 'Acts', 'num': 28, 'name': '徒'},
      {'ch': '罗马书', 'en': 'Romans', 'num': 16, 'name': '羅'},
      {'ch': '哥林多前书', 'en': 'Corinthians 1', 'num': 16, 'name': '林前'},
      {'ch': '哥林多后书', 'en': 'Corinthians 2', 'num': 13, 'name': '林後'},
      {'ch': '加拉太书', 'en': 'Galatians', 'num': 6, 'name': '加'},
      {'ch': '以弗所书', 'en': 'Ephesians', 'num': 6, 'name': '弗'},
      {'ch': '腓利比书', 'en': 'Philippians', 'num': 4, 'name': '肺'},
      {'ch': '歌罗西书', 'en': 'Colossians', 'num': 4, 'name': '西'},
      {'ch': '帖撒罗尼迦前书', 'en': 'Thessalinians 1', 'num': 5, 'name': '帖前'},
      {'ch': '帖撒罗尼迦后书', 'en': 'Thessalinians 2', 'num': 3, 'name': '帖後'},
      {'ch': '提摩太前书', 'en': 'Timothy 1', 'num': 6, 'name': '提前'},
      {'ch': '提摩太后书', 'en': 'Timothy 2', 'num': 4, 'name': '提後'},
      {'ch': '提多书', 'en': 'Titus', 'num': 3, 'name': '多'},
      {'ch': '腓利门书', 'en': 'Philemon', 'num': 1, 'name': '門'},
      {'ch': '希伯来书', 'en': 'Hebrews', 'num': 13, 'name': '來'},
      {'ch': '雅各书', 'en': 'James', 'num': 5, 'name': '雅'},
      {'ch': '彼得前书', 'en': 'Peter 1', 'num': 5, 'name': '彼前'},
      {'ch': '彼得后书', 'en': 'Peter 2', 'num': 3, 'name': '彼後'},
      {'ch': '约翰壹书', 'en': 'John 1', 'num': 5, 'name': '約壹'},
      {'ch': '约翰贰书', 'en': 'John 2', 'num': 1, 'name': '約二'},
      {'ch': '约翰参书', 'en': 'John 3', 'num': 1, 'name': '約三'},
      {'ch': '犹大书', 'en': 'Jude', 'num': 1, 'name': '猶'},
      {'ch': '启示录', 'en': 'Revelation', 'num': 22, 'name': '啟'}
    ],
    zhang: 1,
    juan: 'Genesis',
    max: 50
  },
  mutations: {
    [types.UPDATE_HOLY_ZHANG] (state, zhang) {
      state.zhang = zhang
    },
    [types.UPDATE_HOLY_JUAN] (state, juan) {
      state.juan = juan
    },
    [types.UPDATE_HOLY_MAX] (state, max) {
      state.max = max
    }
  },
  actions: {
  },
  getters: {
  }
})
export default store