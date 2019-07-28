import { bindActionCreators } from "redux";

export const getApts = (apts) => ({
  type: 'GET_APT',
  apts
})

export const getHood = (hood) => ({
  type: 'GET_HOOD',
  hood
})

export const getAptType = (aptType) => ({
  type: 'GET_TYPE',
  aptType
})

export const getCurrApt = (currApt) => ({
  type: 'GET_CURR_APT',
  currApt
})

export const getMapCenter = (mapCenter) => ({
  type: 'GET_MAP_CENTER',
  mapCenter
})
