import React, { useState } from 'react';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubscription = () => {
    // Implement subscription logic here
    if (selectedPlan) {
      alert(`Subscribed to ${selectedPlan.name} plan!`);
    } else {
      alert('Please select a plan.');
    }
  };

  const plans = [
    { id: 1, name: 'Basic', price: 9.99 },
    { id: 2, name: 'Standard', price: 19.99 },
    { id: 3, name: 'Premium', price: 29.99 },
  ];

  return (
    <div>
      <h1>Monthly Subscription Plans</h1>
      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan ${selectedPlan && selectedPlan.id === plan.id ? 'selected' : ''}`}
            onClick={() => handlePlanSelection(plan)}
          >
            <h3>{plan.name}</h3>
            <p>${plan.price} / month</p>

            <div className="price">{selectedPlan.price}</div>
          </div>
          
        ))}
      </div>
      <div className="price">{selectedPlan.price}</div>
      <button onClick={handleSubscription}>Subscribe</button>
    </div>
  );
};

export default SubscriptionPage;
