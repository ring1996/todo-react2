/**
 * 初期データ一覧
 * @package constants
 */

/**
 * Todoリスト初期値
 */
export const INIT_TODO_LIST = [
  {
    id: 1,
    title: "着手前TODO内容入りますテキスト",
    status: "notStarted",
  },
  {
    id: 2,
    title: "着手前TODO内容入りますテキストTODO内容入りますテキストTODO内容入りますテキスト",
    status: "notStarted",
  },
  {
    id: 3,
    title: "進行中TODO内容入りますテキスト",
    status: "inProgress",
  },
  {
    id: 4,
    title: "進行中TODO内容入りますテキストTODO内容入りますテキストTODO内容入りますテキスト",
    status: "inProgress",
  },
  {
    id: 5,
    title: "完了TODO内容入りますテキスト",
    status: "completed",
  },
  {
    id: 6,
    title: "完了TODO内容入りますテキストTODO内容入りますテキストTODO内容入りますテキスト",
    status: "completed",
  },
];

/**
 * ID採番の初期値
 */
export const INIT_UNIQUE_ID = INIT_TODO_LIST.length + 1;
