import React from 'react'
import { Heading,Text ,useColorModeValue,Box} from '@chakra-ui/react'
import Typewriter from "typewriter-effect";
import Timeline from '../Components/Timeline';
import SkillCard from '../Components/SkillCard';
import { IoBarbellOutline, IoTrendingDownOutline, IoBulbOutline, IoWarningOutline } from "react-icons/io5";
import Bio from '../Components/Bio';

function Home() {
  const themeText = useColorModeValue("text.light","text.dark")
  
 

  return (
    <div className='h-screen grid grid-rows-page1 bg-transparent'>
        <div className='m-5'>
          <Heading color={themeText}>
            <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString("My Portfolio")
            .start();
            }}
            />
          </Heading>
          <Box 
            mt="1.25rem"
            p={1.5}
            bg={useColorModeValue('#ffffff89', '#20202380')}
            borderRadius="lg"
            >
              <Text color={themeText} fontSize='2xl'>Mijn naam is Bryan Van Winnendael</Text>
          </Box>

          <Bio/>

          <Timeline/>

          <SkillCard titel={"Sterktes"} tekst={
            <>
            Ik ben een <b>gemotiveerd</b> persoon die intresse heeft in de IT-sector. Ik <b>help graag</b> mensen die problemen ondervinden met hun code en heb zelf een grote doorzettingsvermogen.
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

        </div>
    </div>
  )
}

export default Home