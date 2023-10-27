import * as classes from '../../styles/classes.js'

export default function index(props){
    return (
      <div className={classes.container}>
        <h1 className={classes.description}>Personal Info</h1>
        <p className={classes.descriptionTernary}>Name: Anmar Hani</p>
        <p className={classes.descriptionTernary}>Goals: Software and Embedded Systems Engineer</p>
        <h1 className={classes.description}>Education</h1>
        <p className={classes.descriptionTernary}>Software Engineer in University of Jeddah</p>
        <p className={classes.descriptionTernary}>2021-2025</p>
      </div>
    )
}