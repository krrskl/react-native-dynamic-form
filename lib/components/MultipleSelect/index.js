import React, { PureComponent } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import MultiSelect from "react-native-multiple-select";

import LabelError from "../LabelError";

export default class MultipleSelect extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    label: PropTypes.string,
    values: PropTypes.array,
    onSelect: PropTypes.func,
    single: PropTypes.bool,
    searchInputPlaceholder: PropTypes.string,
    selectText: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: "",
    values: [],
    searchInputPlaceholder: "Search Items...",
    selectText: "Pick Item(s)",
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
    const {
      label,
      values,
      data,
      searchInputPlaceholder,
      selectText,
      error,
    } = this.props;
    const {
      theme: {
        select: {
          tagRemoveIconColor,
          tagBorderColor,
          tagTextColor,
          selectedItemTextColor,
          selectedItemIconColor,
          itemTextColor,
          submitButtonColor,
        },
      },
    } = this.context;
    return (
      <View>
        <LabelError label={label} error={error} />
        <View style={{ marginTop: 10 }}>
          <MultiSelect
            hideSubmitButton
            autoFocusInput={false}
            single={true}
            items={data}
            uniqueKey="value"
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={values}
            selectText={selectText}
            searchInputPlaceholderText={searchInputPlaceholder}
            tagRemoveIconColor={tagRemoveIconColor}
            tagBorderColor={tagBorderColor}
            tagTextColor={tagTextColor}
            selectedItemTextColor={selectedItemTextColor}
            selectedItemIconColor={selectedItemIconColor}
            itemTextColor={itemTextColor}
            displayKey="label"
            searchInputStyle={{ color: "#CCC" }}
            submitButtonColor={submitButtonColor}
            submitButtonText="OK"
          />
        </View>
      </View>
    );
  }
}
