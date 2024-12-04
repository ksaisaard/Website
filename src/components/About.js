import React from 'react';
import '../css/About.css';
import Box from '@mui/material/Box';
import linkedIn_logo from "../images/linkedIn_logo.png";
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

export default function About() {

  const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'MUI', 'C#', 'SQL', 'Unity', 'Swift', 'Python', 'C++', 'Terminal', 'OOP & ODD', 'Responsive Design', 'Mobile Development'];

  return (
    <Box component="section" id="about" sx={{textAlign: 'center', backgroundColor: '#f2f2f2', pt: 15, px: {lg: 20, xs: 0}, pb: 6}}>
      <Typography sx={{ typography: {xs: 'h2', lg: 'h1'}}} gutterBottom>About Me</Typography>
      <Box sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, alignItems: 'stretch', justifyContent: 'center', gap: 5}}>
        <Box component="div" className='about' sx={{backgroundColor: '#f7f7f7', m: {lg: 0, xs: 2}, flex: 1}}>
            <Typography variant="body2" id="bio" sx={{ color: 'text.secondary', fontSize: {xs: 15, md: 20}, textAlign: 'center', m: 5}}>
            As a tech enthusiast passionate about solving complex problems, I thrive at the intersection of curiosity and innovation. With experience in software development and emerging technologies, I focus on creating user-centric applications that enhance efficiency and push boundaries. I’m committed to continuous learning, fostering collaboration, and building solutions that make a meaningful impact.
            <br></br><br></br>
            When I’m not coding or brainstorming ideas, you’ll find me solving Rubik’s cubes, exploring new trails, or diving into the latest tech trends. Let’s connect, collaborate and shape the future of technology together!
            </Typography>
        </Box>
        <Box component="div" sx={{backgroundColor: '#f7f7f7', m: {lg: 0, xs: 2}, flex: 1}}>
            <Typography variant="h2" sx={{color: '#589ebf', textAlign: 'center', m: 5}}>
              My Skills:
            </Typography>
            <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '7px',
                    margin: 0,
                    p: 1,
                  }}
                >
                {skillsList.map((tech, index) => (
                      <Box 
                        sx={{
                            p: '.35rem .7rem',
                            background: '#99999933',
                            color: '#666',
                            fontWeight: '600',
                            fontSize: '1rem',
                            borderColor: 'grey.300',
                            borderRadius: '5px'
                          }}
                        >
                        {tech}
                      </Box>

                ))}
            </Box>
        </Box>
      </Box>
      <br></br>
      <Box sx={{backgroundColor: '#f7f7f7', p: {xs: 1, xl: 2}, pb: {xs: 5}, pt: {xs: 1}, textAlign: 'center', display: 'flex', flexDirection: {xs: 'column', xl: 'row'}, alignItems: 'center', m: {lg: 0, xs: 2}}}>
            <Typography color="primary" sx={{typography: {xs: 'h5', sm: 'h4', md: 'h3'}, m: {xs: 2, xl: '65px'}}}>Connect with me on LinkedIn</Typography>
            <Box component="img" border="0" src={linkedIn_logo} alt="LinkedIn Logo" onClick = {() => window.open('https://www.linkedin.com/in/kittatam-saisaard/', '_blank')} sx={{cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
}
