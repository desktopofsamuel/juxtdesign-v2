import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import Link from '@/components/GatsbyLink';
import DarkToggle from './DarkToggle';
import Submenu from './Submenu';
import { FaChevronDown } from 'react-icons/fa';

const Wrapper = styled('nav', {
  width: '100%',
  height: '80px',
  marginBottom: '$5',
  borderBottom: '2px $border solid',
});

const Grid = styled('div', {
  maxWidth: '$space$large',
  display: 'flex',
  placeContent: 'center center',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '0 auto',
});

const NavItems = styled('ul', {
  display: 'flex',
  placeContent: 'center center',
  alignItems: 'center',
  margin: '0',
});

const Logo = styled('img', {
  width: '40px',
  height: '40px',
  fill: '$onSurface',
});

const NavItem = styled(Link, {
  height: '80px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$2',
  color: '$body',
  placeContent: 'center center',
  padding: '0 $5',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: '$backgroundHover',
  },

  '&:hover div': {
    visibility: 'visible',
    opacity: '1',
    color: '$primary',
  },

  '&.nav-item-active': {
    color: '$primary',
    borderBottom: '2px $primary solid',
  },

  '@md': {
    display: 'none',
  },
});

const MobileNavItem = styled(Link, {
  height: '80px',
  color: '$body',
  padding: '0 $5',
  display: 'none',
  placeContent: 'center center',

  '@md': {
    display: 'grid',
  },
});

const SubMenuItem = styled(Link, {
  color: '$onBackground',
  textAlign: 'center',
  margin: '$2 0',
});

const Header: React.FC = () => (
  <Wrapper>
    <Grid>
      <Link
        to="/"
        style={{
          height: '80px',
          display: 'grid',
          placeContent: 'center center',
        }}
      >
        {/* <Logo src={SiteLogo} fill={currentColor} alt="Site Logo" />
         */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m54.825 0h-3.7351v50.348c-0.0299 2.9479-1.2238 5.7649-3.3223 7.8388-2.0985 2.074-4.932 3.2374-7.8848 3.2374-2.9529 0-5.7864-1.1634-7.8849-3.2374-2.0985-2.0739-3.2924-4.8909-3.3223-7.8388v-18.647h-18.676v18.647c0.0489 7.8811 3.2191 15.423 8.8183 20.978s13.173 8.6737 21.067 8.6737c7.894 0 15.468-3.1182 21.067-8.6737s8.7694-13.097 8.8183-20.978v-50.348h-14.945zm-29.884 48.483v1.865c0.0346 3.9338 1.624 7.6948 4.4225 10.464s6.5794 4.3234 10.52 4.3234 7.7213-1.5539 10.52-4.3234c2.7985-2.7695 4.388-6.5305 4.4225-10.464v-33.566h11.208v33.566c0.0228 3.4429-0.6366 6.8563-1.9405 10.044-1.3039 3.1874-3.2263 6.0858-5.6567 8.5283-2.4305 2.4426-5.3208 4.3811-8.5047 5.7039-3.1838 1.3228-6.5983 2.0039-10.047 2.0039s-6.8631-0.6811-10.047-2.0039c-3.1839-1.3228-6.0742-3.2613-8.5046-5.7039-2.4304-2.4425-4.3529-5.3409-5.6568-8.5283-1.3038-3.1873-1.9633-6.6007-1.9405-10.044v-1.865h11.205zm41.092-35.43v-9.3231h-11.206v9.3231h11.206zm-41.092 22.376v9.3242h-11.206v-9.3242h11.206zm-5.64-35.43v7.4844l7.5093-0.02522-7.5093 14.917v-7.458h-7.5093l7.5093-14.918z"
            clipRule="evenodd"
            fill="var(--colors-primary)"
            fillRule="evenodd"
          />
        </svg>
      </Link>
      <NavItems>
        <NavItem to="/" activeClassName="nav-item-active">
          Home
        </NavItem>
        <NavItem to="/resources/" activeClassName="nav-item-active">
          <p>Categories</p>
          <FaChevronDown size={12} />
          <Submenu>
            <SubMenuItem to="/tags/careers/">
              <StaticImage
                as="span"
                alt=""
                src="../../../static/menu/career.png"
                imgStyle={{ borderRadius: '50%' }}
                style={{ height: '100px', width: '100px' }}
              />
              <p>Career</p>
            </SubMenuItem>
            <SubMenuItem to="/tags/color/">
              <StaticImage
                as="span"
                alt=""
                src="../../../static/menu/color.png"
                imgStyle={{ borderRadius: '50%' }}
                style={{ height: '100px', width: '100px' }}
              />
              <p>Color</p>
            </SubMenuItem>
            <SubMenuItem to="/tags/illustrations/">
              <StaticImage
                as="span"
                alt=""
                src="../../../static/menu/illustrations.png"
                imgStyle={{ borderRadius: '50%' }}
                style={{ height: '100px', width: '100px' }}
              />
              <p>Illustrations</p>
            </SubMenuItem>
            <SubMenuItem to="/tags/typography/">
              <StaticImage
                as="span"
                alt=""
                src="../../../static/menu/typography.png"
                imgStyle={{ borderRadius: '50%' }}
                style={{ height: '100px', width: '100px' }}
              />
              <p>Typography</p>
            </SubMenuItem>
            <SubMenuItem to="/categories/">
              <StaticImage
                as="span"
                alt=""
                src="../../../static/menu/more.png"
                imgStyle={{ borderRadius: '50%' }}
                style={{ height: '100px', width: '100px' }}
              />
              <p>More</p>
            </SubMenuItem>
          </Submenu>
        </NavItem>

        <NavItem to="/guides/" activeClassName="nav-item-active">
          <p>Guides</p>
          {/* <Submenu>
        <SubMenuItem to="/posts/why-designers-need-a-personal-website/">
          <StaticImage
            as="span"
            alt=""
            src="../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Personal Website</p>
        </SubMenuItem>
        <SubMenuItem to="/posts/3-quick-wins-to-make-your-website-accessible/">
          <StaticImage
            as="span"
            alt=""
            src="../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Accessibility</p>
        </SubMenuItem>
        <SubMenuItem to="/posts/how-do-you-save-your-inspirations/">
          <StaticImage
            as="span"
            alt=""
            src="../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>How to prepare for an interview</p>
        </SubMenuItem>
        <SubMenuItem to="/guides/">
          <StaticImage
            as="span"
            alt=""
            src="../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>More blog</p>
        </SubMenuItem>
      </Submenu> */}
        </NavItem>
        <NavItem to="/about/" activeClassName="nav-item-active">
          About
        </NavItem>
      </NavItems>
      <DarkToggle />
    </Grid>
    {/* <DarkModeToggle /> */}
  </Wrapper>
);
export default Header;
