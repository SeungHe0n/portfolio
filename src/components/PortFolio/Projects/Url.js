import '../../../styles/url.scss';
import { FiExternalLink } from 'react-icons/fi';
import { StyleSheet, View, Text, Link } from '@react-pdf/renderer';

function Url({ url }) {
    return (
        <>
            {url.map((u, i) => (
                <div className="url" key={i}>
                    <p>{u.name}</p>
                    <a href={u.src} target="_blank" rel="noreferrer">
                        {u.src}
                        <FiExternalLink />
                    </a>
                </div>
            ))}
        </>
    );
}

function UrlPdf({ url }) {
    return (
        <View>
            {url.map((u, i) => (
                <View style={styles.url} key={i}>
                    <Text style={styles.name}>{u.name}</Text>
                    <Link href={u.src} style={styles.link}>
                        {u.src}
                    </Link>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    url: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 2
    },
    name: {
        fontSize: 11,
        fontWeight: 400
    },
    link: {
        color: 'forestgreen',
        fontSize: 11,
        marginLeft: 5,
        fontWeight: 300
    }
});

export { Url, UrlPdf };
