import '../component/meal-list';
import '../component/card-meal-list';
import '../component/area-based-list';
import $ from 'jquery';
import DataSource from '../data/data-source';

const main = () => {
  const mealListElement = $('meal-list')[0];
  const cardMealList = $('card-meal-list')[0];

  const renderCardResult = (results) => {
    cardMealList.meals = results;
  };

  const fallbackCardResult = (results) => {
    cardMealList.meals = results;
  };

  const renderResult = (results) => {
    mealListElement.meals = results;
  };

  const fallbackResult = (message) => {
    mealListElement.renderError(message);
  };

  $('body')[0].addEventListener('click', async (e) => {
    if (e.target.classList[1] === 'btn-primary') {
      try {
        const area = await DataSource.filterByArea(e.target.classList[2]);
        renderCardResult(area);
        cardMealList.classList.remove('remove-display');
        mealListElement.classList.add('remove-display');
      } catch (message) {
        fallbackCardResult(message);
      }
    }

    if (e.target.classList[0] === 'link') {
      try {
        const lookup = await DataSource.lookupById(e.target.dataset.id);
        renderResult(lookup);
        cardMealList.classList.add('remove-display');
        mealListElement.classList.remove('remove-display');
      } catch (message) {
        fallbackResult(message);
      }
    }

    if (e.target.classList[2] === 'reset') {
      mealListElement.classList.add('remove-display');
      cardMealList.classList.add('remove-display');
    }
  });

  const listArea = $('area-based-list')[0];

  const renderAreaBasedList = (results) => {
    listArea.meals = results;
  };

  window.addEventListener('DOMContentLoaded', async () => {
    const renderArea = await DataSource.listArea();
    renderAreaBasedList(renderArea);
  });
};

export default main;
