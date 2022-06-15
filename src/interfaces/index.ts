export interface IResult {
  id: string;
  urls: {
    small: string;
    regular?: string;
    full?: string;
  };
}

export interface IData {
  results: IResult[];
  total?: number;
  total_pages?: number;
}
