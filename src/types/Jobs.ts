export interface JobCard {
  id: string
  companyName: string
  designation: string
  imgLink: string
  remoteStatus: 'Partial Remote' | 'Fully Remote'
  tags: string[]
  postedDate: Date
}
