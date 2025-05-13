import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Cluster, Warning, Exclamation } from '@kubed/icons';
import { Empty } from './Empty';

export default {
  title: 'Components/Empty',
  component: Empty,
  args: {
    title: 'No data found',
    description: 'Try refreshing or clearing your search filters',
    image: undefined,
    imageStyle: { backgroundColor: '#f0f5ff', borderRadius: '8px' },
    children: 'Refresh Data',
  },
  argTypes: {
    title: {
      name: 'title',
      description: 'Title of Empty component',
      defaultValue: 'No data found',
      control: 'text',
    },
    description: {
      name: 'description',
      description: 'Description of Empty component',
      defaultValue: 'Try refreshing or clearing your search filters',
      control: 'text',
    },
    image: {
      name: 'image',
      description: 'Custom image/icon element',
      options: ['default', 'cluster', 'exclamation', 'warning', 'none'],
      mapping: {
        default: undefined,
        cluster: <Cluster size={48} />,
        exclamation: <Exclamation size={48} />,
        warning: <Warning size={48} />,
        none: null,
      },
      control: {
        type: 'select',
        labels: {
          default: 'Default (Exclamation)',
          cluster: 'Cluster Icon',
          exclamation: 'Exclamation Icon',
          warning: 'Warning Icon',
          none: 'No Icon',
        },
      },
    },
    imageStyle: {
      name: 'imageStyle',
      description:
        'Custom style for the image container (e.g. { backgroundColor: "#f0f5ff", borderRadius: "8px", width: "80px", height: "80px" })',
      defaultValue: { backgroundColor: '#f0f5ff', borderRadius: '8px' },
      control: 'object',
    },
    children: {
      name: 'children',
      description:
        'Footer content - enter button text (e.g. "Refresh Data", "Try Again") or leave empty for no button',
      defaultValue: 'Refresh Data',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px', backgroundColor: '#f9fbfd' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Empty>;

type Story = StoryObj<typeof Empty>;

export const Explame: Story = {
  render: (args) => {
    const [title, setTitle] = React.useState(args.title);
    const [description, setDescription] = React.useState(args.description);
    const [image, setImage] = React.useState(args.image);
    const [imageStyle, setImageStyle] = React.useState(args.imageStyle);
    const [children, setChildren] = React.useState(args.children);

    // Update state when args change
    React.useEffect(() => {
      setTitle(args.title);
      setDescription(args.description);
      setImage(args.image);
      setImageStyle(args.imageStyle || { backgroundColor: '#f0f5ff', borderRadius: '8px' });
      setChildren(args.children);
    }, [args.title, args.description, args.image, args.imageStyle, args.children]);

    // Render footer content if children is provided
    const renderFooter = () => {
      if (!children) return null;

      if (typeof children === 'string') {
        return (
          <div style={{ marginTop: '16px' }}>
            <button
              type="button"
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: '#1890ff',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {children}
            </button>
          </div>
        );
      }

      return children;
    };

    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Empty title={title} description={description} image={image} imageStyle={imageStyle}>
          {renderFooter()}
        </Empty>
      </div>
    );
  },
};

export const Basic = () => {
  return (
    <Empty
      title="No matching results found"
      description="Try refreshing or clearing your search filters"
    />
  );
};

export const Icon = () => {
  return <Empty description={<span>No_Data</span>} image={<Cluster size={48} />} />;
};
