import { RootState } from '@/src/store/types';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { useRef } from 'react';
import { useColorScheme } from 'nativewind';
import { RepositoriesSort } from '@/src/store/user/types';
import { useAppDispatch } from '@/src/store/hooks/useAppDispatch';
import { setRepositoriesSort } from '@/src/store/user/slice';

export default function UserRepositoriesOrder() {
  const { repositoriesSort } = useSelector((state: RootState) => state.user);
  const i18n = useSelector((state: RootState) => state.app.language);
  const { colorScheme } = useColorScheme();
  const dispatch = useAppDispatch();
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const isDark = colorScheme === 'dark';

  const SortMap = {
    'best-match': i18n['Alphabetical'],
    'most-stars': i18n['Most stars'],
    'most-forks': i18n['Most forks'],
  };

  const sortOptions = [
    {
      label: SortMap['best-match'],
      value: 'best-match',
      icon: 'check',
    },
    {
      label: SortMap['most-stars'],
      value: 'most-stars',
      icon: 'star-border',
    },
    {
      label: SortMap['most-forks'],
      value: 'most-forks',
      icon: 'fork-right',
    },
  ];

  const handleChangeSort = (sort: RepositoriesSort) => {
    dispatch(setRepositoriesSort(sort));
    actionSheetRef.current?.hide();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => actionSheetRef.current?.show()}
        className="flex w-full flex-row justify-end items-center gap-2 mt-2"
      >
        <Text className="font-lato-bold dark:text-white">
          {i18n['Sort by:']}
        </Text>

        <View className="items-center flex-row">
          <Text className="font-lato-bold text-blue-300">
            {SortMap[repositoriesSort]}
          </Text>
          <MaterialIcons name="arrow-drop-down" size={24} color={'#4485FD'} />
        </View>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
          paddingHorizontal: 32,
          paddingBottom: 64,
        }}
      >
        <Text className="font-lato-bold text-xl dark:text-white mt-8 mb-6">
          {i18n['Sort by:']}
        </Text>

        <FlatList
          data={sortOptions}
          renderItem={({ item }) => (
            <TouchableOpacity
              hitSlop={10}
              className="flex-row items-center gap-2 mt-4 mb-4"
              onPress={() =>
                handleChangeSort(item.value as keyof typeof SortMap)
              }
            >
              <MaterialIcons
                name={item.icon as any}
                size={20}
                color="#C4C4C4"
              />
              <Text className="font-lato-bold dark:text-white">
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ActionSheet>
    </>
  );
}
