// Generated with util/create-component.js
import React from "react";
import Grid from "./Grid";

export default {
  title: "Grid",
};

const styles = {
  box: {
    background: "#F6F9FC",
    border: "1px solid #ccc",
    padding: "1em",
  },
  header: {
    marginTop: 0,
  },
};

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem dignissimos, voluptate, dicta saepe maiores hic omnis sit porro optio nostrum vero ipsum adipisci quod non quasi excepturi, beatae exercitationem?";

export const DefaultGrid = () => {
  const boxes = [
    { title: "Box 1" },
    { title: "Box 2" },
    { title: "Box 3" },
    { title: "Box 4" },
    { title: "Box 5" },
    { title: "Box 6" },
    { title: "Box 7" },
    { title: "Box 8" },
  ];

  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)">
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const GridColumnGap = () => {
  const boxes = [
    { title: "Box 1" },
    { title: "Box 2" },
    { title: "Box 3" },
    { title: "Box 4" },
    { title: "Box 5" },
    { title: "Box 6" },
    { title: "Box 7" },
    { title: "Box 8" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gridColumnGap="1em"
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const GridRowGap = () => {
  const boxes = [
    { title: "Box 1" },
    { title: "Box 2" },
    { title: "Box 3" },
    { title: "Box 4" },
    { title: "Box 5" },
    { title: "Box 6" },
    { title: "Box 7" },
    { title: "Box 8" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gridRowGap="1em"
    >
      {boxes.map(({ title }) => (
        <div style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </div>
      ))}
    </Grid>
  );
};
export const GridGap = () => {
  const boxes = [
    { title: "Box 1" },
    { title: "Box 2" },
    { title: "Box 3" },
    { title: "Box 4" },
    { title: "Box 5" },
    { title: "Box 6" },
    { title: "Box 7" },
    { title: "Box 8" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gap="1em"
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Grid.Item>
      ))}
    </Grid>
  );
};
export const Nested = () => {
  const boxes = [
    { title: "Box 1" },
    { title: "Box 2" },
    { title: "Box 3" },
    { title: "Box 4" },
    { title: "Box 5" },
    { title: "Box 6" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gridRowGap="2em"
    >
      {boxes.map(() => (
        <Grid.Item style={{ ...styles.box }}>
          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            gap="1em"
          >
            {boxes.map(() => (
              <Grid.Item style={{ ...styles.box }}></Grid.Item>
            ))}
          </Grid>
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const JustifyItemsStart = () => {
  const boxes = [
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gap="2em"
      justifyItems="start"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }} justifySelf="none">
          <h3 style={styles.header}>{title}</h3>
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const JustifyItemsCenter = () => {
  const boxes = [
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gap="2em"
      justifyItems="center"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }} justifySelf="none">
          <h3 style={styles.header}>{title}</h3>
        </Grid.Item>
      ))}
    </Grid>
  );
};
export const JustifyItemsEnd = () => {
  const boxes = [
    { title: "End" },
    { title: "End" },
    { title: "End" },
    { title: "End" },
    { title: "End" },
    { title: "End" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="none"
      gap="2em"
      justifyItems="end"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }} justifySelf="none">
          <h3 style={styles.header}>{title}</h3>
        </Grid.Item>
      ))}
    </Grid>
  );
};
export const AlignItemsStart = () => {
  const boxes = [
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
    { title: "Start" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gap="2em"
      alignItems="start"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }} alignSelf="none">
          <h3 style={styles.header}>{title}</h3>
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const AlignItemsCenter = () => {
  const boxes = [
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
    { title: "Center" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gap="2em"
      alignItems="center"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }} alignSelf="none">
          <h3 style={styles.header}>{title}</h3>
        </Grid.Item>
      ))}
    </Grid>
  );
};
export const AlignItemsEnd = () => {
  const boxes = [
    { title: "End" },
    { title: "End" },
    { title: "End" },
    { title: "End" },
    { title: "End" },
    { title: "End" },
  ];

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gap="2em"
      alignItems="end"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }} alignSelf="none">
          <h3 style={styles.header}>{title}</h3>
        </Grid.Item>
      ))}
    </Grid>
  );
};
export const AlignSelf = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="none"
      gap="2em"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
        <Grid.Item style={{ ...styles.box }} alignSelf="start">
          <h3 style={styles.header}>Start</h3>
        </Grid.Item>
        <Grid.Item style={{ ...styles.box }} alignSelf="center">
          <h3 style={styles.header}>Center</h3>
        </Grid.Item>
        <Grid.Item style={{ ...styles.box }} alignSelf="end">
          <h3 style={styles.header}>End</h3>
        </Grid.Item>
    </Grid>
  );
};
export const JustifySelf = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gap="2em"
      style={{gridAutoRows: 'minmax(100px, auto)', border: '1px solid #ccc'}}
    >
        <Grid.Item style={{ ...styles.box }} justifySelf="end">
          <h3 style={styles.header}>End</h3>
        </Grid.Item>
        <Grid.Item style={{ ...styles.box }} justifySelf="start">
          <h3 style={styles.header}>Start</h3>
        </Grid.Item>
        <Grid.Item style={{ ...styles.box }} justifySelf="center">
          <h3 style={styles.header}>Center</h3>
        </Grid.Item>
    </Grid>
  );
};

export const GridColumn = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      style={{ border: '1px solid #ccc'}}
    >
        <Grid.Item style={{ ...styles.box }} gridColumn='1/2' justifySelf="stretch">
          <h3 style={styles.header}>1/3</h3>
        </Grid.Item>
        <Grid.Item style={{ ...styles.box }} gridColumn='1/3' justifySelf="stretch">
          <h3 style={styles.header}>2/3</h3>
        </Grid.Item>
        <Grid.Item style={{ ...styles.box }} gridColumn='1/4' justifySelf="stretch">
          <h3 style={styles.header}>3/3</h3>
        </Grid.Item>
    </Grid>
  );
};
