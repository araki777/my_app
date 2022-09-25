export interface Menu {
  id: Int16Array;
  name: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date | undefined;
  enabled: Boolean;
  authorId: Int16Array;
}
