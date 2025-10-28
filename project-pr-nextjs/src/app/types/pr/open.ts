export interface PullRequest {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  closedOn: string;
  age: string;
  status:
    | "Unapproved"
    | "Pending approvals"
    | "Requested changes"
    | "Approved"
    | "Closed"
    | "Merged";
  url: string;
  lastAction: string;
  lastActionAt: string;
  reviewersGrouped: {
    approved: string[];
    changesRequested: string[];
    commented: string[];
    pending: string[];
  };
}