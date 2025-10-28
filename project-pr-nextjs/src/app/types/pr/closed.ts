import { Reviewer } from "./reviewer";

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

type PullRequest = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  closedOn: string;
  age: string; // e.g., "168h old" (time PR was open)
  reviewers: Reviewer[];
  status: "Closed" | "Merged"; // Only closed/merged for this view
  url: string;
  rawClosedAt: string; // Crucial for accurate date sorting in main file
};