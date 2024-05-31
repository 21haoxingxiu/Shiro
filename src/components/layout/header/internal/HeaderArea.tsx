'use client'

import { OnlyDesktop } from '~/components/ui/viewport'
import { clsxm } from '~/lib/helper'

import styles from './grid.module.css'

export const HeaderLogoArea: Component = ({ children }) => {
  return (
    <div className={clsxm('relative', styles['header--grid__logo'])}>
      <div
        className={clsxm('relative flex size-full items-center justify-center')}
      >
        jimmy
      </div>
    </div>
  )
}

export const HeaderLeftButtonArea: Component = ({ children }) => {
  return (
    <div
      className={clsxm(
        'relative flex size-full items-center justify-center lg:hidden',
      )}
    >
      主题切换
    </div>
  )
}

export const HeaderCenterArea: Component = ({ children }) => {
  return (
    <OnlyDesktop>
      <div className="flex min-w-0 justify-end">
        <div className="relative flex pt-3">{children}</div>
      </div>
    </OnlyDesktop>
  )
}
