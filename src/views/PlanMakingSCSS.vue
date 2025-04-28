<script setup lang="ts">
import { ref } from 'vue'

const showTips = ref(false)
</script>

<template>
  <div class="plan-making-container">
    <section class="common-information">
      <div class="itinerary-title">
        <div class="trip-name">Ha Noi 2025</div>
        <div class="trip-time">May 15 - May 17, 2025</div>
      </div>
      <div class="information-wrapper">
        <div class="itinerary-banner">
          <div class="banner-overlay"></div>
          <div class="short-description">
            <div>Ha Noi</div>
            <div>A journey through tradition, innovation and culture</div>
          </div>
        </div>
        <div class="itinerary-detail">
          <div class="common-detail-info">
            <div class="location">
              <font-awesome-icon :icon="['fas', 'location-dot']" />Ha Noi, Viet Nam
            </div>
            <div class="duration">
              <font-awesome-icon :icon="['fas', 'calendar-days']" />3 days (May 15 - May 17, 2025)
            </div>
            <div class="travelers">
              <font-awesome-icon :icon="['fas', 'user-group']" /> 2 travelers
            </div>
          </div>
          <div class="description">
            Ha Noi, the vibrant capital of Viet Nam, is a city where ancient history and modern life
            blend seamlessly. Known for its centuries-old architecture, bustling Old Quarter, serene
            lakes, and rich culture, Hà Nội offers visitors a unique charm at every turn. Wander
            through lively markets, taste world-famous street food like phở and bánh mì, and
            discover historical landmarks such as the Hoàn Kiếm Lake, the Temple of Literature, and
            the Ho Chi Minh Mausoleum. Whether you're exploring its winding streets or relaxing in a
            quiet café, Hà Nội promises an unforgettable experience
          </div>
          <div class="tips">
            <div @click="showTips = !showTips" class="title">
              <font-awesome-icon :icon="['fas', 'lightbulb']" />Travel Tips
              <font-awesome-icon :icon="['fas', showTips ? 'angle-up' : 'angle-down']" />
            </div>
            <div class="content" v-if="showTips">
              <div>
                <span class="tip-name">‣ Best time to visit: </span>
                <span class="tip-content">October to April (cooler, dry weather).</span>
              </div>
              <div>
                <span class="tip-name">‣ Must-visit places: </span>
                <span class="tip-content"
                  >Hoan Kiem Lake, Old Quarter, Temple of Literature, Ho Chi Minh Mausoleum, West
                  Lake, Train Street.</span
                >
              </div>
              <div>
                <span class="tip-name">‣ Best foods to try: </span>
                <span class="tip-content">Pho, Bun cha, Banh mi, Cha ca, Egg coffee,...</span>
              </div>
              <div>
                <span class="tip-name">‣ Expense: </span>
                <span class="tip-content"
                  >Budget-friendly — around $30–$60/day for meals, attractions, and transport.</span
                >
              </div>
              <div>
                <span class="tip-name">‣ Transport: </span>
                <span class="tip-content"
                  >Grab app (ride-hailing), taxis (Mai Linh, G7), motorbike rental, walking in the
                  Old Quarter.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="itinerary-wrapper">
      <div class="itinerary">
        <div class="header">
          <div class="title">Trip itinerary</div>
          <div class="view-mode-switch">
            <button class="info-button">
              <font-awesome-icon :icon="['fas', 'timeline']" /> Timeline
            </button>
            <button class="primary-button">
              <font-awesome-icon :icon="['fas', 'table']" /> Day Tabs
            </button>
          </div>
        </div>
        <div class="days-switch">
          <div class="switch">
            <button class="success-button">Day 1 - May 15, 2025</button>
            <button class="info-button">Day 2 - May 16, 2025</button>
            <button class="info-button">Day 3 - May 17, 2025</button>
          </div>
          <button class="success-button">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </button>
        </div>
        <div class="activities-list">
          <div class="title">
            <span>Day 1 - May 15, 2025</span>
            <span class="add-activity">
              <font-awesome-icon :icon="['fas', 'plus']" />Add Activity</span
            >
          </div>
          <div class="list-wrapper">
            <template v-for="i in 4" :key="i">
              <div class="activity-item">
                <div class="header-wrapper">
                  <div class="title">Arrival at Noi Bai Airport</div>
                  <div class="actions">
                    <font-awesome-icon :icon="['fas', 'pencil']" />
                    <font-awesome-icon :icon="['fas', 'trash']" />
                  </div>
                </div>
                <div class="content-wrapper">
                  <div class="time-location">
                    <div class="time"><font-awesome-icon :icon="['fas', 'clock']" /> 09:00 AM</div>
                    <div class="location">
                      <font-awesome-icon :icon="['fas', 'location-dot']" /> Noi Bai International
                      Airport, Viet Nam
                    </div>
                  </div>
                  <div class="content">Flight VNA123 from New York</div>
                  <div class="note">
                    <font-awesome-icon :icon="['fas', 'note-sticky']" /> Remember to exchange
                    currency at the airport
                  </div>
                </div>
                <div class="footer-wrapper">
                  <div class="actions">
                    <button class="primary-button">See details & photo</button>
                    <button class="success-button">View on map</button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="itinerary-compilation">
        <div class="header-tabs">
          <div><font-awesome-icon :icon="['fas', 'car-side']" /> Vehicles</div>
          <div><font-awesome-icon :icon="['fas', 'hotel']" /> Stays</div>
          <div><font-awesome-icon :icon="['fas', 'location-crosshairs']" /> Places</div>
          <div><font-awesome-icon :icon="['fas', 'bowl-food']" /> Food</div>
        </div>
        <div class="title">Transportation</div>
        <div class="items-list">
          <div v-for="i in 4" :key="i" class="item">
            <div class="item-image"></div>
            <div class="item-information">
              <div class="name">Plane</div>
              <div class="description">New York to Ha Noi - May 15, 10:00 AM</div>
              <button>Show details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@import '../assets/css/variables';

.plan-making-container {
  padding: 20px;
  & .common-information {
    padding: 20px;
    & .itinerary-title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-bottom: 16px;
      & .trip-name {
        font-weight: 700;
        font-size: 28px;
      }
      & .trip-time {
        font-size: 14px;
        color: $color-sky-400;
      }
    }
  }
  & .information-wrapper {
    padding-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    & .itinerary-banner {
      background-image: url('../assets/images/hanoi_banner.jpeg');
      height: 200px;
      width: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      & .short-description {
        position: absolute;
        width: 260px;
        bottom: 10px;
        left: 10px;
        color: $color-amber-200;
        font-weight: bold;
        background-color: rgba(37, 68, 13, 0.5);
        border-radius: 8px;
        padding: 6px;
        & > div:first-child {
          font-size: 24px;
        }
        & > div:nth-child(2) {
          font-size: 14px;
        }
      }
      & .banner-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $color-stone-800;
        opacity: 0.4;
      }
    }
    & .itinerary-detail {
      padding: 10px;
      & .common-detail-info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 26px;
        padding: 16px 0;
        & .location,
        & .duration,
        & .travelers {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 700;
          & svg {
            color: $color-sky-400;
          }
        }
      }
      & .description {
        padding-bottom: 20px;
      }
      & .tips {
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        background-color: $color-amber-50;
        border: 1px solid $color-amber-100;
        & .title {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 700;
          &:hover {
            color: $color-amber-500;
          }
          & svg:first-child {
            color: $color-amber-500;
          }
        }
        & .content {
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          & .tip-name {
            font-weight: 600;
          }
        }
      }
    }
  }
  & .itinerary-wrapper {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    gap: 20px;
    & .itinerary {
      display: flex;
      flex-direction: column;
      flex: 0 calc(60% - 20px);
      gap: 20px;
      padding: 10px;
      border-radius: 10px;
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      & .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .title {
          font-size: 20px;
          font-weight: 700;
          color: $color-cyan-700;
        }
        & .view-mode-switch {
          display: flex;
          align-items: center;
          gap: 10px;
          & > button {
            display: flex;
            gap: 10px;
          }
        }
      }
      & .days-switch {
        display: flex;
        justify-content: space-between;
        align-items: start;
        & .switch {
          width: 90%;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
      & .activities-list {
        & .title {
          padding: 6px;
          display: flex;
          justify-content: space-between;
          & span:first-child {
            font-weight: 700;
            font-size: 16px;
          }
          & .add-activity {
            padding: 6px 8px;
            border-radius: 5px;
            display: flex;
            gap: 10px;
            align-items: center;
            cursor: pointer;
            color: $color-sky-500;
            &:hover {
              background: $color-blue-50;
            }
          }
        }
        & .list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          & .activity-item {
            border: 1px solid $color-stone-200;
            padding: 10px;
            border-radius: 10px;
            background-color: #fff;
            &:hover {
              box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 4px;
              transform: translateY(-2px);
              transition: all 0.2s ease-in-out;
            }
            & .header-wrapper {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 14px;
              font-weight: 600;
              padding: 6px 0;
              color: $color-sky-500;
              & .actions {
                display: flex;
                gap: 10px;
                & svg:first-child {
                  color: $color-amber-500;
                }
                & svg:nth-child(2) {
                  color: $color-red-500;
                }
              }
            }
            & .content-wrapper {
              padding: 6px 0;
              & .time-location {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 6px 0;
                font-size: 14px;
                & > div {
                  width: 50%;
                  text-align: left;
                  & svg {
                    color: $color-sky-400;
                  }
                }
              }
              & .content {
                font-size: 14px;
                padding: 6px 0;
              }
              & .note {
                font-size: 14px;
                margin: 6px 0;
                padding: 6px;
                border-radius: 5px;
                background-color: $color-sky-100;
                & svg {
                  color: $color-sky-600;
                }
              }
            }
            & .footer-wrapper {
              padding: 6px 0;
              & .actions {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;
              }
            }
          }
        }
      }
    }
    & .itinerary-compilation {
      flex: 0 calc(40% - 20px);
      padding: 10px;
      border-radius: 10px;
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      & .header-tabs {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        border-bottom: 1px solid $color-gray-200;
        font-size: 14px;
        & > div {
          padding: 10px 4px;
          width: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          border-bottom: 1px solid transparent;
          &:hover {
            color: $color-sky-500;
            border-bottom: 1px solid $color-sky-500;
          }
        }
        & > div:first-child {
          color: $color-sky-500;
          font-weight: bold;
          border-bottom: 1px solid $color-sky-500;
        }
      }
      & .title {
        text-align: left;
        font-weight: bold;
        font-size: 16px;
        color: $color-cyan-600;
        padding: 10px 0;
      }
      & .items-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        & .item {
          border-radius: 10px;
          border: 1px solid $color-stone-200;
          padding: 10px;
          position: relative;
          overflow: hidden;
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 4px;
            transition: all 0.2s ease-in-out;
          }
          & .item-image {
            background-image: url('../assets/images/plane.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
          & .item-information {
            margin-left: 110px;
            & > div,
            & > button {
              padding: 4px 0;
            }
            & .name {
              font-weight: bold;
              color: $color-cyan-500;
              font-size: 14px;
            }
            & .description {
              font-size: 12px;
              color: $color-stone-600;
            }
            & button {
              border: none;
              outline: none;
              background-color: transparent;
              cursor: pointer;
              color: $color-gray-400;
              &:hover {
                color: $color-cyan-500;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1000px) {
  .itinerary-wrapper {
    flex-wrap: nowrap !important;
  }
}
@media (max-width: 1000px) {
  .itinerary-wrapper {
    & .itinerary,
    & .itinerary-compilation {
      flex: 1 1 100% !important;
    }
  }
}
</style>
