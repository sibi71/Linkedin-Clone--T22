import React from 'react'
import "./Box.css"
import { Tag ,Groups} from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      }));
      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          marginLeft: theme.spacing(1),
        },
      }));
      
      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
      }));
      
      export default function Box() {
        const [expanded, setExpanded] = React.useState('panel1');
      
        const handleChange = (panel) => (event, newExpanded) => {
          setExpanded(newExpanded ? panel : false);
        };
  return (
    <div className='box'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="box__items">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Recent</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='box__option'>
          
                <p>
                    <Groups/>
                    <h5>JavaScipt Developer Group</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Tag/>
                    <h5>Apple</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Groups/>
                    <h5>React Native</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Groups/>
                    <h5>Data scirntist & Data Analyst</h5>
                </p>
            </Typography>
         
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="box__items">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><a href='#'>Groups</a></Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <Typography className='box__option'>
                <p>
                    <Groups/>
                    <h5>JavaScipt Developer Group</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Groups/>
                    <h5>React Native</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Groups/>
                    <h5>Data scirntist & Data Analyst</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Groups/>
                    <h5>React js Group</h5>
                </p>
            </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="box__items">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><a href='#'>Followed Hashtags</a></Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Typography>
          <Typography className='box__option'>
                <p>
                    <Tag/>
                    <h5>Zoho</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Tag/>
                    <h5>hcl</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Tag/>
                    <h5>wipro</h5>
                </p>
            </Typography>
            <Typography className='box__option'>
                <p>
                    <Tag/>
                    <h5>tcs</h5>
                </p>
            </Typography>
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
