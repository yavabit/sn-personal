import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { menuItems } from '../../config/menuSettings';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: 'hsla(220, 20%, 25%, 0.6)',
  backgroundColor: 'rgba(5 7 10 / 0.4)',
  boxShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px,hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
  padding: '8px 12px',
}));

export default function Header() {

  const handleMenuClick = (id: string) => {
    const targetElement = document.getElementById(id)!;
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/*   <Sitemark /> */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              {menuItems.map(item => (
                <Button key={item.id} variant="text" color="info" size="small" onClick={() => handleMenuClick(item.link)}>
                  {item.title}
                </Button>
                )
              )}
            </Box>
          </Box>         
          
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
