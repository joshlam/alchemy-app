import React from 'react';
import Swiper from 'react-native-swiper';

import MindTransmutations from './MindTransmutations';
import BodyTransmutations from './BodyTransmutations';

export default ({
  rank,
  level,
  mana,
  manaForLevel,
  canTranscend,
  canAscend,
  onLevelUp,
  onPageChange,
  onHomePress,
  onTransmutationPress,
  category,
  isUnlocking,
  gratitudeStatus,
  connectStatus,
  valuesStatus,
  affirmationsStatus,
  readingStatus,
  passionStatus,
  mindfulnessStatus,
  visualizationStatus,
  meditationStatus,
  hydrationStatus,
  sleepStatus,
  supplementStatus,
  fitnessStatus,
  natureStatus,
  sunlightStatus,
  goodFoodStatus,
  junkFoodStatus,
  yogaStatus
}) => {
  return (
    <Swiper
      loop={false}
      showsButtons={false}
      index={category}
      onIndexChanged={onPageChange}
    >
      <MindTransmutations
        rank={rank}
        level={level}
        mana={mana}
        manaForLevel={manaForLevel}
        canTranscend={canTranscend}
        canAscend={canAscend}
        onLevelUp={onLevelUp}
        onHomePress={onHomePress}
        onTransmutationPress={onTransmutationPress}
        isUnlocking={isUnlocking}
        gratitudeStatus={gratitudeStatus}
        connectStatus={connectStatus}
        valuesStatus={valuesStatus}
        affirmationsStatus={affirmationsStatus}
        readingStatus={readingStatus}
        passionStatus={passionStatus}
        mindfulnessStatus={mindfulnessStatus}
        visualizationStatus={visualizationStatus}
        meditationStatus={meditationStatus}
      />
      <BodyTransmutations
        rank={rank}
        level={level}
        mana={mana}
        manaForLevel={manaForLevel}
        canTranscend={canTranscend}
        canAscend={canAscend}
        onLevelUp={onLevelUp}
        onHomePress={onHomePress}
        onTransmutationPress={onTransmutationPress}
        isUnlocking={isUnlocking}
        hydrationStatus={hydrationStatus}
        sleepStatus={sleepStatus}
        supplementStatus={supplementStatus}
        fitnessStatus={fitnessStatus}
        natureStatus={natureStatus}
        sunlightStatus={sunlightStatus}
        goodFoodStatus={goodFoodStatus}
        junkFoodStatus={junkFoodStatus}
        yogaStatus={yogaStatus}
      />
    </Swiper>
  );
};
