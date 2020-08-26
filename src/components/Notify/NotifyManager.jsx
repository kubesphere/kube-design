import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { generateUUID, createChainedFunction } from './utils'
import Notice from './Notice'

class NotifyManager extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
  }

  static defaultProps = {
    style: {
      top: 65,
      left: '50%',
    },
    prefixCls: 'notify',
  }

  static newInstance = (properties, callback) => {
    const { ...props } = properties || {}
    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', `${props.wrapperCls || 'notify'}-wrapper`)
    document.body.appendChild(wrapper)

    let called = false

    const ref = notify => {
      if (called) {
        return
      }
      called = true
      callback({
        createNotice(noticeProps) {
          notify.add(noticeProps)
        },
        removeNotice(key) {
          notify.remove(key)
        },
        component: notify,
        destroy() {
          ReactDOM.unmountComponentAtNode(wrapper)
          wrapper.parentNode.removeChild(wrapper)
        },
      })
    }

    ReactDOM.render(
      <NotifyManager
        key={generateUUID('notify-manager')}
        {...props}
        ref={ref}
      />,
      wrapper
    )
  }

  state = {
    notices: [],
  }

  add = notice => {
    const key = notice.key || generateUUID('notice')

    this.setState(previousState => {
      const { notices } = previousState
      if (!notices.filter(v => v.key === key).length) {
        if (notices.length >= 3) {
          notices.shift()
        }
        return {
          notices: notices.concat({ key, ...notice }),
        }
      }
      return {}
    })
  }

  remove = key => {
    this.setState(previousState => ({
      notices: previousState.notices.filter(notice => notice.key !== key),
    }))
  }

  render() {
    const { className, style, prefixCls } = this.props
    const { notices } = this.state
    const noticeNodes = notices.map(notice => {
      const onClose = createChainedFunction(
        this.remove.bind(this, notice.key),
        notice.onClose
      )
      return (
        <Notice
          {...notice}
          onClose={onClose}
          ref={n => {
            this.notice = n
          }}
        >
          {notice.content}
        </Notice>
      )
    })

    return (
      <div
        className={classnames(prefixCls, {
          [className]: !!className,
        })}
        style={style}
      >
        {noticeNodes}
      </div>
    )
  }
}

export default NotifyManager
