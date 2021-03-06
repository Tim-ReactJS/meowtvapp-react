import React from "react-native";
import GridView from "./grid_view";
import styles from "../styles.js";
import VideoEntry from "./video_entry";

export default class VideosList extends React.Component {
  constructor() {
    super();
    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    let videos = this.props.videos || [];

    return (
      <GridView
        style={styles.videosList}
        items={videos}
        itemsPerRow={4}
        renderItem={this.renderItem}
      />
    )
  }

  renderItem(video) {
    return <VideoEntry video={video} onSelect={()=> this.props.onSelect(video)} />;
  }
}
