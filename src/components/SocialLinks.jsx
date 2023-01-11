import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Facebook <FaFacebook size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        }, {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://linkedin.com',
        }, {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:kanch@gmail.com',
        }, {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-br-md',
            download: true
        }
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style,download}) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-black hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
                        <a 
                        href={href} 
                        target='_blank' 
                        className="flex justify-between items-center w-full text-white"
                        download={download}
                        rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks