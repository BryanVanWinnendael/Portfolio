import React from 'react'
import { Text, useColorModeValue, Box } from '@chakra-ui/react'

export default function Timeline() {
  return (
    <Box className="border-l-2 border-[#a79f83] mt-5" >
        <div className="flex flex-start items-center">
            <div className="bg-[#a79f83] w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <Text className="font-semibold text-xl -mt-2">Afgestudeerd Economie</Text>
        </div>
        <div className="ml-6 mb-6 pb-6">
            <p className="text-[#a79f83] text-sm">31 Juni, 2020</p>
            <Text color={useColorModeValue("gray","darkGray")} marginTop={2}>In mijn middelbaar ben ik afgestuurd met de richting Economie moderne talen.</Text>
        </div>
   
        <div className="flex flex-start items-center">
            <div className="bg-[#a79f83] w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <Text className="font-semibold text-xl -mt-2">Toegepaste Informatica</Text>
        </div>
        <div className="ml-6 mb-6 pb-6">
            <p className="text-[#a79f83] text-sm">1 September, 2020</p>
            <Text color={useColorModeValue("gray","darkGray")} marginTop={2}>Op de ucll studeer ik Toegepaste Informatica met een verdieping in software.</Text>
        </div>
    </Box>
  )
}
