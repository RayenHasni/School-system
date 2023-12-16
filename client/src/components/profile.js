import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function ProfilePage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            School System
          </Typography>
          <Button color="inherit">Action</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h4" component="h2">
        Dashboard
      </Typography>

      {/* Dashboard content goes here */}
    </div>
  );
}

export default ProfilePage;
