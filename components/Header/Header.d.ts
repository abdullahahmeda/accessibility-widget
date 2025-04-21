import { FC, ReactNode } from 'react';

interface HeaderProps {
    onShow: () => void;
    children?: ReactNode;
}
declare const Header: FC<HeaderProps>;
export default Header;
