import withAuth from '../src/modules/auth/Components/WithAuth';

const dashboard = () => {
  return <div>dashboard</div>;
};

export default withAuth(dashboard);
