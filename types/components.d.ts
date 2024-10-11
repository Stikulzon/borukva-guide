declare type TGroupEntity = "channel" | "chat";

declare interface IChannelItem {
  title: string;
  description: string;
  image: string;
  link: string;
  type: TGroupEntity;
}

declare interface ISectionGroup extends Pick<IChannelItem, 'title'>{
  items: ISectionItem[]
}

declare interface ISectionItem extends Pick<IChannelItem, 'image' | 'link'>{
  name: string;
}