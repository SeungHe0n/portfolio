import '../../styles/contact.scss';
import PropTypes from 'prop-types';
import { MdMail } from 'react-icons/md';
import { FaGithub, FaVimeo } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { StyleSheet, View, Text, Svg, Path, Link } from '@react-pdf/renderer';

Contact.propTypes = {
    email: PropTypes.string,
    github: PropTypes.string,
    velog: PropTypes.string,
    tel: PropTypes.string
};

export function Contact({ email, github, velog, tel }) {
    return (
        <div className="contact">
            {tel && (
                <a className="tel" href={`tel: ${tel}`}>
                    <AiFillPhone />
                    <p>{tel}</p>
                </a>
            )}
            {email && (
                <a className="email" href={`mailto: ${email}`}>
                    <MdMail />
                    <p>{email}</p>
                </a>
            )}
            {github && (
                <a
                    className="github"
                    href={`https://${github}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                    <p>{github}</p>
                </a>
            )}
            {velog && (
                <a
                    className="velog"
                    href={`https://${velog}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaVimeo />
                    <p>{velog}</p>
                </a>
            )}
        </div>
    );
}

ContactPdf.propTypes = {
    email: PropTypes.string,
    github: PropTypes.string,
    velog: PropTypes.string,
    tel: PropTypes.string
};

export function ContactPdf({ email, github, velog }) {
    return (
        <View style={styles.contact}>
            {email && (
                <View style={styles.contactitem}>
                    <Email />
                    <Text style={styles.p}>{email}</Text>
                </View>
            )}
            {github && (
                <View style={styles.contactitem}>
                    <Github />
                    <Link src={`https://${github}`} style={styles.p}>
                        {github}
                    </Link>
                </View>
            )}
            {velog && (
                <View style={styles.contactitem}>
                    <Velog />
                    <Link src={`https://${velog}`} style={styles.p}>
                        {velog}
                    </Link>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    contact: { display: 'flex' },
    contactitem: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 2,
        alignItems: 'center'
    },
    p: {
        marginLeft: 4,
        fontSize: 10,
        fontWeight: 300,
        color: 'black',
        textDecoration: 'none'
    }
});

const Email = () => (
    <Svg height="10" width="10" viewBox="0 0 24 24">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path
            fill="#4aa8d8"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
    </Svg>
);
const Github = () => (
    <Svg height="10" width="10" viewBox="0 0 496 512">
        <Path
            fill="#24292F"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        />
    </Svg>
);
const Velog = () => (
    <Svg height="10" width="10" viewBox="0 0 448 512">
        <Path
            fill="#1FC896"
            d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"
        />
    </Svg>
);
