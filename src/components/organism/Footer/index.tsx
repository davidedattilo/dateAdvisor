import { HeaderMiniContainer, HeaderLight, HeaderAncor, HeaderLogo } from './styled.js';
import { IFooter } from './interfaces';

const Footer = ({ alt, src, width, height, href, title }: IFooter) => {
    return (
        <HeaderMiniContainer>
            <HeaderLight>
                <HeaderAncor href={href} title={title}>
                    <HeaderLogo
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        title={title}
                    />
                </HeaderAncor>
            </HeaderLight>
        </HeaderMiniContainer>
    );
};

Footer.defaultProps = {
    alt: 'Logo Date Advisor',
    src: 'https://cdn-icons-png.flaticon.com/512/1999/1999360.png',
    width: 50,
    height: 50,
    href: '#',
    title: 'Logo Date Advisor',
};

export default Footer;
