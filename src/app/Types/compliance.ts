export interface Violation {
    id: number;
    message: string;
    severity: "low" | "medium" | "high";
    timestamp: string;
  }
  
  export interface ComplianceStatus {
    totalMessages: number;
    totalViolations: number;
    violations: Violation[];
  }
  