export class DivingLog {
  id: number;
  siteName: string;
  siteLocation: string;
  date: string;
  visibility: string;
  diveStart:string;
  diveEnd: string;

  constructor(
    id: number = 0,
    siteName: string = '',
    siteLocation: string = '',
    date:  string = '',
    visibility: string = '',
    diveStart:  string = '',
    diveEnd: string = '',
  )
  { this.id = id; this.siteName = siteName; this.siteLocation = siteLocation; this.date = date;
  this.visibility = visibility; this.diveStart = diveStart; this.diveEnd = diveEnd}
}

