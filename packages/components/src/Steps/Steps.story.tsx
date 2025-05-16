import React, { useState } from 'react';
import { Cluster, Kubernetes, Kubesphere } from '@kubed/icons';
import { Steps, Step, StepCompleted, TabStep } from './Steps';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';

export default {
  title: 'Components/Steps',
  component: Steps,
};

export const Basic = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Steps active={active} onStepClick={setActive}>
        <Step label="Step 1" description="First desc" icon={<Cluster size={24} />}>
          First step
        </Step>
        <Step label="Step 2" description="Second desc">
          Second step
        </Step>
        <Step label="Step 3" description="Third desc">
          Third step
        </Step>
        <StepCompleted>completed.......</StepCompleted>
      </Steps>
      <Group>
        <Button onClick={prevStep} disabled={active <= 0}>
          Prev
        </Button>
        <Button onClick={nextStep} color="secondary" disabled={active >= 3}>
          Next
        </Button>
      </Group>
    </>
  );
};

export const TabSteps = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Steps active={active} onStepClick={setActive} variant="tab">
        <TabStep
          label="Step 1"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Cluster size={24} />}
        >
          First step
        </TabStep>
        <TabStep
          label="Step 2"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Kubernetes size={24} />}
        >
          Second step
        </TabStep>
        <TabStep
          label="Step 3"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Kubesphere size={24} />}
        >
          Third step
        </TabStep>
        <StepCompleted>completed.......</StepCompleted>
      </Steps>
      <Group>
        <Button onClick={prevStep} disabled={active <= 0}>
          Prev
        </Button>
        <Button onClick={nextStep} color="secondary" disabled={active >= 3}>
          Next
        </Button>
      </Group>
    </>
  );
};

export const VerticalStep = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Steps active={active} onStepClick={setActive} orientation="vertical">
        <Step
          label="Step 1"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Cluster size={24} />}
        >
          First step
        </Step>
        <Step
          label="Step 2"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Kubernetes size={24} />}
        >
          Second step
        </Step>
        <Step
          label="Step 3"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Kubesphere size={24} />}
        >
          Third step
        </Step>
        <StepCompleted>completed.......</StepCompleted>
      </Steps>
      <Group>
        <Button onClick={prevStep} disabled={active <= 0}>
          Prev
        </Button>
        <Button onClick={nextStep} color="secondary" disabled={active >= 3}>
          Next
        </Button>
      </Group>
    </>
  );
};

export const VerticalTabStep = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Steps active={active} onStepClick={setActive} variant="tab" orientation="vertical">
        <TabStep
          label="Step 1"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Cluster size={24} />}
        >
          First step
        </TabStep>
        <TabStep
          label="Step 2"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Kubernetes size={24} />}
        >
          Second step
        </TabStep>
        <TabStep
          label="Step 3"
          description="Not set"
          completedDescription="Set"
          progressDescription="Setting"
          icon={<Kubesphere size={24} />}
        >
          Third step
        </TabStep>
        <StepCompleted>completed.......</StepCompleted>
      </Steps>
      <Group>
        <Button onClick={prevStep} disabled={active <= 0}>
          Prev
        </Button>
        <Button onClick={nextStep} color="secondary" disabled={active >= 3}>
          Next
        </Button>
      </Group>
    </>
  );
};
