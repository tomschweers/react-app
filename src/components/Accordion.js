import React from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css'

const MyAccordion = () => (
  <div>
    <h1>React Accordion</h1>
    <Accordion atomic={true}>

      <AccordionItem title="POWERTRAIN">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="EXTERIOR">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="GRAPHICS">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="DRIVELINE">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="SUSPENSION">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="EXHAUST">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="INTERIOR">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="ACCESSORIES">
        <DummyContent />
      </AccordionItem>

    </Accordion>
  </div>
)

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)

export default MyAccordion
