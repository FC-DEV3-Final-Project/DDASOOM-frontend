export interface StoryComment {
  id: number
  writer: string
  contents: string
  writeTime: string
}

export interface Story {
  storySeq: number
  anonymityFlag: string
  areaCode: string
  storyTitle: string
  storyPasscode: string
  storyWriter: string
  storyContents: string
  readCount: number
  fileName: string | null
  orgFileName: string
  writeTime: string
  modifyTime: string
  modifierId: string | null
  delFlag: string
  donorName: string | null
  writerId: string | null
  comments: StoryComment[]
}

export interface Comment {
  id: number
  writer: string
  contents: string
  date: string
  password: string
}

export interface Reaction {
  name: string
  count: number
  icon: string
  text: string
}
