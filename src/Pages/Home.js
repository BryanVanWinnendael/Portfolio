import React from 'react'
import { Text, useColorModeValue, Box, Button, Link, useMediaQuery} from '@chakra-ui/react'
import Timeline from '../Components/Timeline';
import SkillCard from '../Components/SkillCard';
import { IoBarbellOutline, IoTrendingDownOutline, IoBulbOutline, IoWarningOutline, IoDocumentTextOutline } from "react-icons/io5";
import Bio from '../Components/Bio';

function Home(props) {
  const themeText = useColorModeValue("text.light","text.dark")
  const [isLargerThan690] = useMediaQuery('(max-width: 690px)')

  const contact = () => {
    props.setActive("contact")
  }

  const skills = () => {
    props.setActive("skills")
  }
  
  const projects = () => {
    props.setActive("projects")
  }

  return (
    <div className='h-screen grid grid-rows-page1 bg-transparent'>
        <div className='m-5'>
          <Box 
            p={2}
            bg={useColorModeValue('#ffffff89', '#20202380')}
            borderRadius="lg"
            >
              <Text fontSize={isLargerThan690? 18:28} display="flex" color={themeText}>Mijn naam is <Text color={useColorModeValue("#555657", "#b8af8e")} ml={1} fontWeight="bold">Bryan Van Winnendael</Text></Text>
          </Box>

          <Bio skills={skills} projects={projects}/>

          <Timeline/>

          <SkillCard titel={"Sterktes"} tekst={
            <>
            Ik ben een <b>gemotiveerde</b> persoon die intresse heeft in de IT-sector. Ik <b>help graag</b> mensen die problemen ondervinden met hun code en heb zelf een grote doorzettingsvermogen.
            Ik ben ook vloeiend in Nederlands en Engels.
            </>
          } icon={<IoBarbellOutline/>}/>

          <SkillCard titel={"Zwaktes"} tekst={
            <>
            Hoewel ik goed in een team kan werken, heb ik problemen met de <b>leiding</b> te <b>nemen</b> in een groep. Ook <b>spreek</b> ik niet graag voor een <b>groep</b>.
            </>
          } icon={<IoTrendingDownOutline/>}/>

          <SkillCard titel={"Kansen"} tekst={
            <>
            Met de <b>opleiding</b> die ik nu krijg en de kansen die ik online altijd terug zie, is het meer dan mogelijk om dit doel te bereiken.
            In de <b>IT-sector</b> is ook er altijd <b>veel vraag</b> voor jobs.
            </>
          } icon={<IoBulbOutline/>}/>

          <SkillCard titel={"Bedreigingen"} tekst={
            <>
            Uiteraard ben ik <b>niet de enige</b> die Toegepaste Informatica kiest als zijn richting. Het zal dus niet uitzonderlijk zijn dat er mensen zijn die <b>beter en sneller</b> zullen zijn in wat ik zal doen.
            Ook is het bekend dat de <b>IT-sector</b> een sector is waar je altijd moet <b>bijleren</b> en steeds moet zoeken naar nieuwe <b>innovatie</b>. Hier kan ik bij innovatie wat <b>achterlopen</b>. 
            </>
          } icon={<IoWarningOutline/>}/>


          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Text color={useColorModeValue("gray","darkGray")}>Meer intresse? Bekijk mijn <b>CV</b> of 
              <Link color="#a79f83" fontWeight="bold" ml={1} onClick={contact} isExternal>
                contacteer
              </Link> mij.
            </Text>
              <Button  
              _hover={{
                  background: useColorModeValue("#555657", "#b8af8e")
              }} 
              leftIcon={<IoDocumentTextOutline />} 
              color="white" 
              background={useColorModeValue("#414243","#a79f83")} 
              variant='solid'
              mt={5}
              mb={5}
              onClick={() => {
                window.open('/cv.pdf', '_blank');
              }}
              >
              Bekijk mijn CV
            </Button>
          </Box>

        </div>
    </div>
  )
}

export default Home