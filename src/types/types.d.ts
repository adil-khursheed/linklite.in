type TShortLink = {
  _id: string;
  user_id: string;
  short_link_id: string;
  original_link: string;
  clicks_history: Array<{ time_stamp: string }>;
  createdAt: string;
  updatedAt: string;
};
