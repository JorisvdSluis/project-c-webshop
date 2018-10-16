import * as React from 'react';
import AppLayout from "../../layout/AppLayout/AppLayout";
import {withStyles} from '@material-ui/core';
import styles, {StyleProps} from "../albums/TrackStyle";
import TrackList from '../../reusable/TrackList/TrackList';
import {ITrackData} from '../../reusable/TrackRow/TrackRow';
import gql from "graphql-tag";
import {Query} from "react-apollo";

interface IProps extends StyleProps {

}
// Hier komt dan de query om alle tracks en bijbehorende informatie
// te krijgen voor een specifiek genre 
const query = gql`
    {
        tracks {
          name
          durationMs
          previewUrl
          albums{
           name
           id
          }
          artists{
            name
          }
        }
      }
    `;

class Genres extends React.Component<IProps> {
  public render() {
    return (
      <AppLayout>
        <Query query={query}>
          {({loading, error, data}) => {
              if (loading) {
                return null;
              }
              if (error) {
                return <span>{error.message}</span>;
              }
              return this.renderDetail(data.tracks);
            }}
        </Query>
      </AppLayout>
    );
  }

  private renderDetail = (tracks: any[]) => {
    const classes = this.props.classes!
    const data: ITrackData[] = tracks.map((track: any, i: number) =>
      ({
        title: track.name,
        previewUrl: track.previewUrl,
        albumId: track.albums[0].id,
        durationMs: track.durationMs,
        artistName: track.artists[0].name,
        albumsName: track.albums[0].name,
        index: i
      } as ITrackData)
    );
    return (
      <div className={classes.page}>
        <div className={classes.title}>
          <TrackList trackData={data}/>
        </div>
      </div>
    );
  };
}

export default withStyles(styles)(Genres);
