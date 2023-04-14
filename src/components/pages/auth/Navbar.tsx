import { EnteLinkLogo } from 'components/Navbar/EnteLinkLogo';
import { FluidContainer } from 'components/Container';
import NavbarBase from 'components/Navbar/base';
import React from 'react';
import { t } from 'i18next';
import { Button } from '@mui/material';

export default function AuthNavbar() {
    return (
        <NavbarBase>
            <FluidContainer>
                <EnteLinkLogo />
            </FluidContainer>
            <Button color="critical"> {t('LOGOUT')}</Button>
        </NavbarBase>
    );
}
