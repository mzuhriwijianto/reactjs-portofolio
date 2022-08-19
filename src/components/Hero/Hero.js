import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Selamat Datang <br />
          di Personal Website
        </SectionTitle>
        <SectionText>
        Teknologi Informasi Bidang Kearsipan
        Dinas Perpustakaan dan Kearsipan Kabupaten Bojonegoro
        </SectionText>
        <Button onClick={props.handleClick}>Getting Start</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
