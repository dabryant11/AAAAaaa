// import React, { useState } from 'react';

// import { ComplianceStatus, Violation } from '../src/app/Types/compliance';
import ViolationCard from './ViolationCard'; // Fixed typo here

const ComplianceDashboard: React.FC = () => {

  return (
    <div className="dashboard">
      <h1>Compliance Monitoring Dashboardddddddd</h1>
      <div className="summary">
        {/* <p>Total Messages: {complianceData.totalMessages}</p>
        <p>Total Violations: {complianceData.totalViolations}</p> */}
      </div>
      <div className="violations">
        {/* {complianceData.violations.map((violation) => (
          <ViolationCard key={violation.id} violation={violation} />
        ))} */}
        <ViolationCard />
      </div>
    </div>
  );
};

export default ComplianceDashboard;
