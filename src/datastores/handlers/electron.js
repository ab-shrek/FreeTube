import { ipcRenderer } from 'electron'
import { IpcChannels, DBActions } from '../../constants'

class Settings {
  static find() {
    return ipcRenderer.invoke(
      IpcChannels.DB_SETTINGS,
      { action: DBActions.GENERAL.FIND }
    )
  }

  static upsert(_id, value) {
    return ipcRenderer.invoke(
      IpcChannels.DB_SETTINGS,
      { action: DBActions.GENERAL.UPSERT, data: { _id, value } }
    )
  }
}

class History {
  static find() {
    return ipcRenderer.invoke(
      IpcChannels.DB_HISTORY,
      { action: DBActions.GENERAL.FIND }
    )
  }

  static upsert(record) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HISTORY,
      { action: DBActions.GENERAL.UPSERT, data: record }
    )
  }

  static updateWatchProgress(videoId, watchProgress) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HISTORY,
      {
        action: DBActions.HISTORY.UPDATE_WATCH_PROGRESS,
        data: { videoId, watchProgress }
      }
    )
  }

  static updateLastViewedPlaylist(videoId, lastViewedPlaylistId) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HISTORY,
      {
        action: DBActions.HISTORY.UPDATE_PLAYLIST,
        data: { videoId, lastViewedPlaylistId }
      }
    )
  }

  static delete(videoId) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HISTORY,
      { action: DBActions.GENERAL.DELETE, data: videoId }
    )
  }

  static deleteAll() {
    return ipcRenderer.invoke(
      IpcChannels.DB_HISTORY,
      { action: DBActions.GENERAL.DELETE_ALL }
    )
  }

  static persist() {
    return ipcRenderer.invoke(
      IpcChannels.DB_HISTORY,
      { action: DBActions.GENERAL.PERSIST }
    )
  }
}

class Profiles {
  static create(profile) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PROFILES,
      { action: DBActions.GENERAL.CREATE, data: profile }
    )
  }

  static find() {
    return ipcRenderer.invoke(
      IpcChannels.DB_PROFILES,
      { action: DBActions.GENERAL.FIND }
    )
  }

  static upsert(profile) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PROFILES,
      { action: DBActions.GENERAL.UPSERT, data: profile }
    )
  }

  static delete(id) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PROFILES,
      { action: DBActions.GENERAL.DELETE, data: id }
    )
  }

  static persist() {
    return ipcRenderer.invoke(
      IpcChannels.DB_PROFILES,
      { action: DBActions.GENERAL.PERSIST }
    )
  }
}

class Playlists {
  static create(playlists) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      { action: DBActions.GENERAL.CREATE, data: playlists }
    )
  }

  static find() {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      { action: DBActions.GENERAL.FIND }
    )
  }

  static upsertVideoByPlaylistName(playlistName, videoData) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      {
        action: DBActions.PLAYLISTS.UPSERT_VIDEO,
        data: { playlistName, videoData }
      }
    )
  }

  static upsertVideoIdsByPlaylistId(_id, videoIds) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      {
        action: DBActions.PLAYLISTS.UPSERT_VIDEO_IDS,
        data: { _id, videoIds }
      }
    )
  }

  static delete(_id) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      { action: DBActions.GENERAL.DELETE, data: _id }
    )
  }

  static deleteVideoIdByPlaylistName(playlistName, videoId) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      {
        action: DBActions.PLAYLISTS.DELETE_VIDEO_ID,
        data: { playlistName, videoId }
      }
    )
  }

  static deleteVideoIdsByPlaylistName(playlistName, videoIds) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      {
        action: DBActions.PLAYLISTS.DELETE_VIDEO_IDS,
        data: { playlistName, videoIds }
      }
    )
  }

  static deleteAllVideosByPlaylistName(playlistName) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      {
        action: DBActions.PLAYLISTS.DELETE_ALL_VIDEOS,
        data: playlistName
      }
    )
  }

  static deleteMultiple(ids) {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      { action: DBActions.GENERAL.DELETE_MULTIPLE, data: ids }
    )
  }

  static deleteAll() {
    return ipcRenderer.invoke(
      IpcChannels.DB_PLAYLISTS,
      { action: DBActions.GENERAL.DELETE_ALL }
    )
  }
}

class HighlightedComments {
  static create(videoId) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HIGHLIGHTED_COMMENTS,
      { action: DBActions.GENERAL.CREATE, data: videoId }
    )
  }

  static find() {
    return ipcRenderer.invoke(
      IpcChannels.DB_HIGHLIGHTED_COMMENTS,
      { action: DBActions.GENERAL.FIND }
    )
  }

  static upsertHighlightedComment(videoId, comment) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HIGHLIGHTED_COMMENTS,
      {
        action: DBActions.HIGHLIGHTED_COMMENTS.UPSERT_COMMENT,
        data: { videoId: videoId, comment: JSON.stringify(comment) }
      }
    )
  }

  static deleteHighlightedComment(videoId, comment) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HIGHLIGHTED_COMMENTS,
      {
        action: DBActions.HIGHLIGHTED_COMMENTS.DELETE_COMMENT,
        data: { videoId: videoId, comment: JSON.stringify(comment) }
      }
    )
  }

  static upsertHighlightedReply(videoId, comment, reply) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HIGHLIGHTED_COMMENTS,
      {
        action: DBActions.HIGHLIGHTED_COMMENTS.UPSERT_REPLY,
        data: { videoId: videoId, comment: JSON.stringify(comment), reply: JSON.stringify(reply) }
      }
    )
  }

  static deleteHighlightedReply(videoId, comment, reply) {
    return ipcRenderer.invoke(
      IpcChannels.DB_HIGHLIGHTED_COMMENTS,
      {
        action: DBActions.HIGHLIGHTED_COMMENTS.DELETE_REPLY,
        data: { videoId: videoId, comment: JSON.stringify(comment), reply: JSON.stringify(reply) }
      }
    )
  }

  static persist() {
    return ipcRenderer.invoke(
      IpcChannels.DB_HIGHLIGHTED_COMMENTS,
      { action: DBActions.GENERAL.PERSIST }
    )
  }
}

const handlers = {
  settings: Settings,
  history: History,
  profiles: Profiles,
  playlists: Playlists,
  highlightedComments: HighlightedComments
}

export default handlers
