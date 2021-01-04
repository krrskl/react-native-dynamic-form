import React, { PureComponent } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import RNPickerSelect from "react-native-picker-select";
import LabelError from "../LabelError";

export default class Select extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    label: PropTypes.string,
    value: PropTypes.object,
    onSelect: PropTypes.func,
    selectText: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: "",
    values: [],
    inputPlaceholder: "Pick Item",
    onSelect: () => {},
    error: false,
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  };

  onSelectedItemsChange = (selectedItems) => {
    const { onSelect } = this.props;
    onSelect(selectedItems);
  };

  render() {
    const { label, value, data, inputPlaceholder, error } = this.props;
    return (
      <View>
        <LabelError label={label} error={error} />
        <View style={{ marginTop: 10 }}>
          <RNPickerSelect
            onValueChange={this.onSelectedItemsChange}
            placeholder={inputPlaceholder}
            items={data}
            value={value}
          ></RNPickerSelect>
        </View>
      </View>
    );
  }
}
