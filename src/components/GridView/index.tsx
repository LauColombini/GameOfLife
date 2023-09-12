import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";

interface Cell {
  id: number;
  isAlive: boolean;
}

interface Styles {
  cell: {
    borderTopWidth?: number;
    borderLeftWidth?: number;
    borderBottomWidth?: number;
    borderRightWidth?: number;
    backgroundColor?: string;
  };
  scrollContainer: {
    justifyContent: string;
    alignItems: string;
    flexGrow: number;
  };
  gridContainer: {
    marginHorizontal: number;
  };
  row: {
    flexDirection: string;
  };
}

interface RenderCellProps {
  styles: Styles;
  cell: Cell;
  idx: number;
  idxRow: number;
  width: number;
  height: number;
  onPressHandler: (idx: number, idxRow: number) => void;
}

interface GridViewProps {
  grid: {
    cells: Cell[][];
  };
  width: number;
  height: number;
  onChange: (x: number, y: number) => void;
}

const GridView = (props: GridViewProps) => {
  const { grid, width, height } = props;

  const onPressHandler = (x: number, y: number) => {
    props.onChange(x, y);
  };

  const renderCell = ({
    styles,
    cell,
    idx,
    idxRow,
    width,
    height,
  }: RenderCellProps) => {
    let style = Object.create(styles.cell);
    style.borderTopWidth = 1;
    style.borderLeftWidth = 1;
    if (idx === height - 1) style.borderBottomWidth = 1;
    if (idxRow === width - 1) style.borderRightWidth = 1;
    style.backgroundColor = cell.isAlive ? "#2A2B2A" : "#F8F4E3";

    return (
      <TouchableHighlight
        key={cell.id}
        onPress={() => onPressHandler(idx, idxRow)}
      >
        <View style={style}></View>
      </TouchableHighlight>
    );
  };

  return (
    <ScrollView
      horizontal={true}
      bounces={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <ScrollView
        nestedScrollEnabled
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.gridContainer}>
          {grid.cells.map((row, idx) => {
            return (
              <View key={idx} style={styles.row}>
                {row.map((cell, idxRow) =>
                  renderCell({ styles, cell, idx, idxRow, width, height })
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default GridView;

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  gridContainer: {
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: Dimensions.get("window").width * 0.07,
    height: Dimensions.get("window").width * 0.07,
    minWidth: 15,
    minHeight: 15,
    maxWidth: 50,
    maxHeight: 50,
    borderColor: "#706C61",
  },
});
