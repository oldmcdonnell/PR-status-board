export interface PullRequestClosed {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  closedOn: string;
  age: string; //need to calculate age
//   reviewers: Reviewer[];
  status: "Closed" | "Merged";
  url: string;
    rawClosedAt: string; 

}