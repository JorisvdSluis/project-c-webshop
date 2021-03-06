import * as React from 'react';
import TrackRow from '../TrackRow/TrackRow';

import  styles, { StyleProps } from "../../home/explore/TrackStyleExplore";
import { withStyles } from '@material-ui/core';
import ITrack from "../../../../models/ITrack";


interface IProps  extends StyleProps{
  trackData: ITrack[];
}

class TrackListExplore extends React.Component<IProps> {
  
  public render() {
    const classes = this.props.classes!
    return (
      <table>
        <tr>
         <td className={classes.favorite}/>
          <td className= {classes.title}>
            Title
          </td>
          <td className= {classes.artist}>Artist</td>
          <td className= {classes.album}>Album</td>
          <td className= {classes.duration}>
            duration
          
          
          </td>
          <td className= {classes.favorite}/>
        </tr>
        {this.props.trackData.map((trackData, i) =>
          <TrackRow
            key={i}
            data={trackData}
           
          />
        )}
        
      </table>
    );
  }
}

export default withStyles(styles)(TrackListExplore);
