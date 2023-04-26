import Home from '../components/home'
import About from '../components/about'
import Services from '../components/service'
import Work from '../components/work'
import Resume from '../components/resume'
import Contact from '../components/contact'
import useId from '../hooks/useid'
export const navbar = [
    {
        id: 1,
        element: <Home/>,
        title: "home",
        path: "/home",
        private: false,
        hidden: false,
      },
      {
        id: 2,
        element: <About/>,
        title: "about",
        path: "/about",
        private: true,
        hidden: false,
      }, {
        id: 3,
        element: <Services/>,
        title: "services",
        path: "/service",
        private: true,
        hidden: false,
      }, {
        id: 4,
        element: <Work/>,
        title: "work",
        path: "/work",
        private: false,
        hidden: false,
      }, {
        id: 5,
        element: <Resume/>,
        title: "resume",
        path: "/resume",
        private: false,
        hidden: false,
      },
      {
        id: 6,
        element: <Contact/>,
        title: "contact",
        path: "/contact",
        private: false,
        hidden: false,
      },
]
