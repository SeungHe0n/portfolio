import '../../styles/skills.scss';
import { Title, TitlePdf } from './Title';
import { StyleSheet, View, Image } from '@react-pdf/renderer';

function Skills({ skills }) {
    return (
        <div className="skills">
            <Title title="SKILLS" />
            <div>
                {skills.map((x, i) => (
                    <img key={i} src={x.svgSrc} alt={x.name} />
                ))}
            </div>
        </div>
    );
}

function SkillsPdf({ skills }) {
    return (
        <View>
            <TitlePdf title="SKILLS" width={55} />
            <View style={styles.skills}>
                {skills.map((skill, i) => (
                    <Image
                        style={styles.skill}
                        src={`https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/skills/${skill.name}.png`}
                        key={i}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    skills: {
        display: 'flex',
        flexDirection: 'row'
    },
    skill: {
        height: 20,
        paddingRight: 10,
        paddingBottom: 5
    }
});

export { Skills, SkillsPdf };
